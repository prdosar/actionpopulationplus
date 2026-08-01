document.addEventListener("DOMContentLoaded", () => {
    // Inject Modal HTML
    const modalHTML = `
    <div class="payment-modal-overlay" id="paymentModalOverlay">
        <div class="payment-modal">
            <button class="payment-modal-close" id="paymentModalClose">&times;</button>
            
            <!-- Form View -->
            <div class="payment-view active" id="paymentViewForm">
                <h3>Faire un don par Mobile Money</h3>
                <div class="payment-form-group">
                    <label>Réseau</label>
                    <select id="payNetwork">
                        <option value="TMONEY">T-Money</option>
                        <option value="FLOOZ">Flooz (MoovMoney)</option>
                    </select>
                </div>
                <div class="payment-form-group">
                    <label>Numéro de téléphone (ex: 90000000)</label>
                    <input type="text" id="payPhone" placeholder="Votre numéro sans l'indicatif">
                </div>
                <div class="payment-form-group">
                    <label>Montant (FCFA)</label>
                    <input type="number" id="payAmount" value="10000" min="100">
                </div>
                <button class="payment-btn" id="btnPaySubmit">Procéder au paiement</button>
                <div class="payment-status-message error" id="payFormError"></div>
            </div>

            <!-- Loading / Validation View -->
            <div class="payment-view" id="paymentViewLoading">
                <h3>Validation en cours</h3>
                <p style="text-align:center;">Veuillez confirmer la transaction sur votre téléphone. Ne fermez pas cette fenêtre.</p>
                <div style="text-align:center; margin-top: 20px;">
                    <div class="payment-spinner" style="border-top-color: #1B4F8A; border-color: rgba(27,79,138,0.2); width:40px; height:40px; border-width: 4px;"></div>
                </div>
                <div class="payment-status-message info" id="payLoadingText">Attente de validation...</div>
            </div>

            <!-- Success View -->
            <div class="payment-view" id="paymentViewSuccess">
                <div class="payment-success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>Paiement Réussi !</h3>
                <p style="text-align:center;">Merci pour votre généreux don. Votre soutien est précieux pour nos actions.</p>
                <button class="payment-btn" id="btnPaySuccessClose" style="margin-top:20px;">Fermer</button>
            </div>

            <!-- Error View -->
            <div class="payment-view" id="paymentViewError">
                <div class="payment-error-icon"><i class="fas fa-times-circle"></i></div>
                <h3>Échec du paiement</h3>
                <p style="text-align:center;" id="payErrorText">Une erreur est survenue lors de la transaction.</p>
                <button class="payment-btn" id="btnPayRetry" style="background:#1B4F8A; margin-top:20px;">Réessayer</button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('paymentModalOverlay');
    const closeBtn = document.getElementById('paymentModalClose');
    const btnSubmit = document.getElementById('btnPaySubmit');
    const viewForm = document.getElementById('paymentViewForm');
    const viewLoading = document.getElementById('paymentViewLoading');
    const viewSuccess = document.getElementById('paymentViewSuccess');
    const viewError = document.getElementById('paymentViewError');
    const formError = document.getElementById('payFormError');
    
    // Config API
    const API_KEY = '39668f1d-0605-4716-9021-6db7c0a43db2';
    
    let checkInterval = null;

    function openModal(amount = 10000) {
        document.getElementById('payAmount').value = amount;
        showView(viewForm);
        overlay.classList.add('active');
        formError.textContent = '';
    }

    function closeModal() {
        overlay.classList.remove('active');
        if(checkInterval) clearInterval(checkInterval);
    }

    function showView(view) {
        [viewForm, viewLoading, viewSuccess, viewError].forEach(v => v.classList.remove('active'));
        view.classList.add('active');
    }

    closeBtn.addEventListener('click', closeModal);
    document.getElementById('btnPaySuccessClose').addEventListener('click', closeModal);
    document.getElementById('btnPayRetry').addEventListener('click', () => showView(viewForm));

    // Hook up the original donate buttons
    const donBtn = document.querySelector('.dons-impact-cta .btn-green');
    if (donBtn) {
        donBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // find active amount
            const activeBtn = document.querySelector('.amount-btn.active');
            let amt = 10000;
            if (activeBtn && activeBtn.textContent.includes('FCFA')) {
                amt = parseInt(activeBtn.textContent.replace(/[^0-9]/g, ''));
            }
            openModal(amt);
        });
    }
    
    const navDonBtn = document.querySelector('.btn-nav-don');
    if (navDonBtn) {
        navDonBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(10000);
        });
    }
    
    const heroDonBtn = document.querySelector('.hero-buttons .btn-outline');
    if (heroDonBtn) {
        heroDonBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(10000);
        });
    }

    // Hook up method cards
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        card.style.cursor = 'pointer'; // Make them look clickable
        card.addEventListener('click', (e) => {
            const text = card.textContent.toUpperCase();
            if (text.includes('T-MONEY') || text.includes('FLOOZ')) {
                e.preventDefault();
                // Check if an amount is selected
                const activeBtn = document.querySelector('.amount-btn.active');
                let amt = 10000;
                if (activeBtn && activeBtn.textContent.includes('FCFA')) {
                    amt = parseInt(activeBtn.textContent.replace(/[^0-9]/g, ''));
                }
                
                // Pre-select network
                if (text.includes('T-MONEY')) {
                    document.getElementById('payNetwork').value = 'TMONEY';
                } else if (text.includes('FLOOZ')) {
                    document.getElementById('payNetwork').value = 'FLOOZ';
                }
                openModal(amt);
            }
        });
    });

    btnSubmit.addEventListener('click', async () => {
        const phone = document.getElementById('payPhone').value.trim();
        const amount = document.getElementById('payAmount').value.trim();
        const network = document.getElementById('payNetwork').value;

        if (!phone || !amount) {
            formError.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        formError.textContent = "";
        showView(viewLoading);
        
        const identifier = "APP_DON_" + Date.now() + "_" + Math.floor(Math.random()*1000);
        
        try {
            const response = await fetch('https://paygateglobal.com/api/v1/pay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    auth_token: API_KEY,
                    phone_number: phone,
                    amount: amount,
                    description: "Donation APP",
                    identifier: identifier,
                    network: network
                })
            });
            
            const data = await response.json();
            
            if (data.status == 0) {
                // Initiated successfully, start polling
                pollTransactionStatus(data.tx_reference);
            } else {
                showError("Erreur d'initiation. Code: " + data.status);
            }
        } catch (err) {
            showError("Erreur réseau lors de l'initiation du paiement.");
        }
    });

    function pollTransactionStatus(tx_reference) {
        let attempts = 0;
        checkInterval = setInterval(async () => {
            attempts++;
            if (attempts > 30) { // 30 * 4s = 120s timeout
                clearInterval(checkInterval);
                showError("Le paiement a expiré ou n'a pas été validé à temps.");
                return;
            }

            try {
                const response = await fetch('https://paygateglobal.com/api/v1/status', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        auth_token: API_KEY,
                        tx_reference: tx_reference
                    })
                });
                
                const data = await response.json();
                
                if (data.status == 0) {
                    clearInterval(checkInterval);
                    showView(viewSuccess);
                } else if (data.status == 4) {
                    clearInterval(checkInterval);
                    showError("Le paiement a expiré.");
                } else if (data.status == 6) {
                    clearInterval(checkInterval);
                    showError("Le paiement a été annulé.");
                }
                // If status == 2 (En cours), just continue polling
                
            } catch(e) {
                // Ignore network errors on polling, will try next interval
            }
        }, 4000);
    }
    
    function showError(msg) {
        document.getElementById('payErrorText').textContent = msg;
        showView(viewError);
    }
});

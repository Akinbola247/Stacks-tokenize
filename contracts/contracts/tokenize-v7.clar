;; tokenize.clar Fungible Token

(define-fungible-token tokenize)

;; Constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_OWNER_ONLY (err u100))
(define-constant ERR_NOT_TOKEN_OWNER (err u101))

(define-data-var token-uri (string-utf8 256) u"https://hiro.so")

;; SIP-010 Functions
(define-read-only (get-name) (ok "tokenize"))
(define-read-only (get-symbol) (ok "tokenize"))
(define-read-only (get-decimals) (ok u6))
(define-read-only (get-balance (who principal)) (ok (ft-get-balance tokenize who)))
(define-read-only (get-total-supply) (ok (ft-get-supply tokenize)))
(define-read-only (get-token-uri) (ok (some (var-get token-uri))))

;; Public Functions
(define-public (set-token-uri (value (string-utf8 256)))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_OWNER_ONLY)
        (var-set token-uri value)
        (ok (print {
              notification: "token-metadata-update",
              payload: {
                contract-id: current-contract,
                token-class: "ft"
              }
            }))))

(define-public (mint (amount uint) (recipient principal))
  (begin
    (ft-mint? tokenize amount recipient)))

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) ERR_NOT_TOKEN_OWNER)
    (try! (ft-transfer? tokenize amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)))

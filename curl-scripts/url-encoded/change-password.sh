# ID=2 sh curl-scripts/url-encoded/change-password.sh

curl "https://aqueous-atoll-85096.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo

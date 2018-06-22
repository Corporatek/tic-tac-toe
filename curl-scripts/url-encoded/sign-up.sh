# sh curl-scripts/url-encoded/sign-up.sh

curl "https://aqueous-atoll-85096.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo

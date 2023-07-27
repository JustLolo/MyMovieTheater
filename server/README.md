# Followed this guide
https://developers.cloudflare.com/workers/get-started/guide/



# Deployment/Run
Loggin into your account using: `yarn wrangler login`
## Dev
###

## Prod

### 1 - Adding your secret token to the project
You can get your **API Read Access Token** [here](https://www.themoviedb.org/settings/api`)
and then run [[1]](https://developers.cloudflare.com/workers/wrangler/migration/v1-to-v2/wrangler-legacy/commands/#secret)

`echo "[API_Read_Access_Token_Here]" | yarn wrangler secret put MOVIE_TOKEN`

### 2 - Check current secrets
`yarn wrangler secret list`

### 3 - Deploying
`yarn run deploy -env prod`

# Read the following 
https://developers.cloudflare.com/workers/wrangler/system-environment-variables/
https://developers.cloudflare.com/workers/wrangler/environments/



### run local dev server
yarn wrangler dev
Check `https://developers.cloudflare.com/workers/wrangler/commands/#dev` if for extra dev options

## Testing
Open http://127.0.0.1:8787/popular in a broswer or check the local (local to my computer) postman

### Need some help?
yarn wrangler docs

# Deploying
check wrangler.toml for details.
## dev
The default is dev

`yarn run deploy`





### 環境構築


```
# profile 設定
$ node_modules/.bin/serverless config credentials --provider aws --key [aws_access_key] --secret [aws_secret_access_key]

# 環境変数設定
conf.sample.yml をベースに conf.dev.yml, conf.prod.yml を作成する

# カスタムドメイン作成
# node_modules/.bin/serverless create_domain
```

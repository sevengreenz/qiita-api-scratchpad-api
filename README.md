### 環境構築


```
# profile 設定
$ node_modules/.bin/serverless config credentials --provider aws --key [aws_access_key] --secret [aws_secret_access_key]

# 環境変数設定
$ echo export QIITA_CLIENT_ID=[Qiita で発行した CLIENT_ID] >> ~/.bash_profile
```



### vue ファイルのデバッグ方法

ブレークポイントとしたい行に `debugger;` と書いて、ビルド、デバッグ開始

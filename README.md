# portfolio

Git hub 使い方
　#1. フォルダを新規のレポジトリに追加する
　　・まず Git Bash を起動する。
　　・「cd」と入力し Enter
　　・「cd フォルダ名」を入力し Enter
　　・「git init」と入力し Enter
　　・「git add ファイル名」と入力し Enter
　　　「git add .」とするとそのフォルダ内のすべてのファイルを指定できる
　　・「git commit -m "git hub 内で表示される適当な名前"」と入力し Enter
　　・「git config --global user.name "inoinotomoyan(git hub のユーザー名)"」と入力し Enter
　　・「git config --global user.email "登録済みのメアド"」と入力し Enter
　　・「git branch -M main」と入力し Enter
　　・「git remote add origin https://github.com/inoinotomoyan/フォルダ名.git」と入力しEnter
　　・「git push -u origin main」と入力し Enter

#2.更新するとき
　　・「cd」入力
　　・「cd 対象のフォルダ名」入力
　　・「git init」で初期化
　　・「git add ファイル名」
　　・「git commit -m "git hub の画面に表示させる適当な名前」
　　・「git push origin main」
#3.ブランチを変更するとき
　　・git checkout "ブランチ名" (切り替える前にファイルは切り替える前のブランチにコミットしておく)

#4.master ブランチを main に変更する方法
　　・git branch -m master main

#5.リモートリポジトリの登録方法
　　 ・git remote add origin https://github.com/inoinotomoyan/portfolio_top.git
　　 ・portfolio_top のところを変更して他のリポジトリーに変更したりできる

from django.db import models

class Post(models.Model):
    '''モデルクラス
    '''
    
    # タイトル用のフィールド(列)
    title = models.CharField(     # models.???で???の部分がデータ型の設定になる
        verbose_name='タイトル', # フィールドのタイトル       
        max_length=200            # 最大文字数は200
    )

    # 本文用のフィールド(列)
    content = models.TextField(
        verbose_name='本文' # フィールドのタイトル
    )

    # 投稿日時のフィールド(列)
    posted_at = models.DateTimeField(
        verbose_name='投稿日時', # フィールドのタイトル
        auto_now_add=True       # 日時を自動追加
    )


    def __str__(self):
        '''Django管理サイトでデータを表示する際に識別名として
           投稿記事タイトル(titleフィールドの値)を表示するために必要

        Returns(str):投稿記事のタイトル
        '''
        return self.title

#コメントモデル
class Comment(models.Model):
    user_name = models.CharField('名前', max_length=255, default='名無し')
    message = models.TextField('本文')
    target = models.ForeignKey(Post, on_delete=models.CASCADE, verbose_name='対象記事')
    created_at = models.DateTimeField('作成日', auto_now_add=True)

    def __str__(self):
        return self.message[:20]
# Create your models here.

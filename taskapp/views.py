from django.shortcuts import render
from django.views.generic.base import TemplateView 
from django.views.generic import ListView
from .models import Post, Comment
from django.shortcuts import redirect, get_object_or_404
from django.views.generic import DetailView, FormView
from django.views.generic.edit import CreateView
from .forms import ContactForm
from django import forms
from django.contrib import messages
from django.core.mail import EmailMessage
from django.urls import reverse_lazy

# from .forms import CommentForm

class IndexView(ListView):
    '''トップページのビュー
    
    テンプレートのレンダリングに特化したTemplateViewを継承
    
    Attributes:
        template_name: レンダリングするテンプレート
        context_object_name: object_listキーの別名を設定
        queryset: データベースのクエリ
    '''
    # index.htmlをレンダリングする
    template_name = 'index.html'
    # object_listキーの別名を設定
    context_object_name = 'orderby_records'
    # モデルBlogPostのオブジェクトにorder_by()を適用して
    # BlogPostのレコードを投稿日時の降順で並べ替える
    queryset = Post.objects.order_by('posted_at')
    # 1ページに表示するレコードの件数を設定
    paginate_by = 4

# Create your views here.
class TestView(ListView):
    template_name = 'test.html'
    queryset = Post.objects.order_by('posted_at')



class PropertiesView(TemplateView):

    template_name = 'properties.html'

class PropertyView(TemplateView):

    template_name = 'property-details.html'

class ContactView(FormView):
    '''問い合わせページを表示するビュー

    フォームで入力されたデータを取得し、メールの作成と送信を行う
    '''
    # contact.htmlをレンダリングする
    template_name ='contact.html'
    # forms.pyで定義したContactFormをform_classに設定
    form_class = ContactForm
    # 送信完了後にリダイレクトするページ
    success_url = reverse_lazy('taskapp:contact')

    def form_valid(self, form):
        '''FormViewクラスのform_vail()をオーバーライド

        フォームのバリデーションを通過したデータがPOSTされたときに呼ばれるメール送信を行う

        parameters:
            form(object): ContactFormのオブジェクト
        Return:
            HttpResponseRedirectのオブジェクト
            オブジェクトをインスタンス化するとsuccess_urlで
            設定されているURLにリダイレクトする
        '''
        # フォームに入力されたデータをフィールド名を指定して取得
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        title = form.cleaned_data['title']
        message = form.cleaned_data['message']
        # メールのタイトルの書式を設定
        subject = 'お問い合わせ: {}'.format(title)
        # フォームの入力データの書式を設定
        message = \
            '送信者: {0}\nメールアドレス: {1}\n タイトル:{2}\n メッセージ:\n{3}' \
            .format(name, email, title, message)
        # メールの送信元のアドレス
        # 送信先のメールアドレス
        to_list = ['ooharaschool@gmail.com']
        # EmailMessageオブジェクトをを生成
        message = EmailMessage(subject=subject,
                               body=message,
                               to=to_list,
                               )
        # EmailMessageクラスのsend()でメールサーバーからメールを送信
        message.send()
        # 送信完了後に表示するメッセージ
        messages.success(
            self.request, 'お問い合わせは正常に送信されました。')
        # 戻り値はスーパークラスのform_vail()の戻り値(HttpResponseRedirect)
        return super().form_valid(form)

#コメント投稿ページのビュー
#class CommentView(CreateView):
 #  model = Comment
#  form_class = CommentCreateForm

    #フォームに入力された情報が正しい場合の処理
   # def form_valid(self, form):
    #   post_pk = self.kwargs['pk']
    #   post = get_object_or_404(Post, pk=post_pk)
    #   comment = form.save(commit=False)
    #   comment.target = post
    #   comment.save()
    #   return redirect('taskapp:index', pk=post_pk)

    #htmlテンプレートに渡すデータを定義
    # def get_context_data(self, **kwargs):
       # context = super().get_context_data(**kwargs)
       # context['post'] = get_object_or_404(Post, pk=self.kwargs['pk'])
       # return context

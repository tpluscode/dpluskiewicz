const cookieScript = document.createElement('script')
cookieScript.src = '//wpcc.io/lib/1.0.2/cookieconsent.min.js'
cookieScript.onload = () => {
    window.wpcc.init({
        'colors': {
            'popup': {'background': '#606060', 'text': '#ffffff', 'border': '#f9f9f9'},
            'button': {'background': '#f9f9f9', 'text': '#000000'}
        },
        'position': 'bottom',
        'content': {
            'href': 'https://translate.google.com/translate?hl=en&amp;sl=en&amp;tl=pl&amp;u=https://www.websitepolicies.com/policies/view/mwqJldRg',
            'button': 'OK!',
            'message': 'Ta strona może tworzyć ciasteczka celem lepszego dopasowania treści do odbiorców.',
            'link': 'Przeczytaj więcej'
        }
    })
}

const cookieStyle = document.createElement('link')
cookieStyle.href = '//wpcc.io/lib/1.0.2/cookieconsent.min.css'
cookieStyle.type = 'text/css'
cookieStyle.rel = 'stylesheet'

window.addEventListener('load', async () => {
    document.head.appendChild(cookieStyle)
    document.head.appendChild(cookieScript)
})

import './Footer.scss'

function Footer() {
  return(
    <footer className='footer'>
      <div className='footer__container'>
        <div className="footer__links">
          <a className="footer__link" href="http://www.gsras.ru/new/news/">Новости</a>
          <a className="footer__link" href="http://www.gsras.ru/cgi-bin/new/catalog.pl?l=0">Каталоги</a>
          <a className="footer__link" href="http://www.gsras.ru/new/wf/">Сейсм.данные</a>
          <a className="footer__link" href="http://www.gsras.ru/new/ssd.htm">ССД</a>
          <a className="footer__link" href="http://www.gsras.ru/new/soft/">Продукты</a>
          <a className="footer__link" href="http://www.gsras.ru/new/links.htm">Ссылки</a>
          <a className="footer__link" href="http://www.gsras.ru/new/struct/">Структура</a>
          <a className="footer__link" href="http://www.gsras.ru/new/public/">Публикации</a>
          <a className="footer__link" href="http://www.gsras.ru/new/conf/">Конференции</a>
          <a className="footer__link" href="http://www.gsras.ru/new/announ/">Объявления</a>
          <a className="footer__link" href="http://www.gsras.ru/new/doc/corrup.htm">Противодействие коррупции</a>
          <a className="footer__link" href="http://www.gsras.ru/new/about.htm">О нас</a>
        </div>
        <p className="footer__copyright">
          © ФИЦ ЕГС РАН 1993-2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
const PurpleTreeLayout = ({ children }) => {
  return (
    <>
      <div className="page-content bg">
        <main className="site-main site-wrapper">{children}</main>
        <footer className="site-footer">
          <p className="site-footer__text">
            This demo is powered by{' '}
            <a
              alt="Learn more about Redwoodjs"
              href="http://redwoodjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              Redwoodjs
            </a>{' '}
            and{' '}
            <a
              alt="Learn more about Stripe"
              target="_blank"
              href="https://stripe.com/"
              rel="noreferrer"
            >
              Stripe{' '}
            </a>
            | View the redwoodjs-stripe repository on{' '}
            <a
              alt="View repo on Github"
              target="_blank"
              href="https://github.com/chrisvdm/redwoodjs-stripe"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default PurpleTreeLayout

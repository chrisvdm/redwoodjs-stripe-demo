import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header className="site-header">
        <h1>Redwoodjs x Stripe Demo</h1>
        <h3>A Stripe integration with Redwoodjs made easy</h3>
      </header>

      <article className="container--light">
        <p>the best way to show you how is with this little sneaky demo</p>
        <p className="text--note">
          before you start you will need a Stripe account. once you have that,
          get your Stripe api keys ready. you can find them{' '}
          <a
            alt="Takes you to the developer section"
            target="_blank"
            href="https://dashboard.stripe.com/test/apikeys"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <ol>
          <li>
            <p>
              install <code>redwoodjs-stripe</code>
            </p>
            <p>
              <span className="cmd">yarn add redwoodjs-stripe</span>
            </p>
          </li>
          <li>
            <p>
              setup <code>redwoodjs-stripe</code> by running this last command
              and following the prompts
            </p>
            <p>
              <span className="cmd">yarn redwoodjs-stripe setup</span>
            </p>
          </li>
          <li>
            <p>
              all done? cool now navigate to{' '}
              <code>
                <Link to={routes.stripeDemo()}>/stripe-demo</Link>
              </code>
            </p>
          </li>
        </ol>
      </article>
    </>
  )
}

export default HomePage

import Layout from '../components/Layout.js' //Import Layout component.
import { withRouter } from 'next/router' //Import withRouter: this allows us to access the values of the Route/endpoint within index.js
import Link from 'next/link' //Import Link (This allows us to link our pages to one another)

const button = {
  height: '65px',
  width: 'auto',
  margin: '10px'
}

const content = {
  margin: '10px'
}

const Content = withRouter(props => (
    <div style={content}>
        <h1>{props.router.query.common} {props.router.query.flag}</h1>
        <h2>Continent: {props.router.query.con}</h2>
        <h2>Population: {props.router.query.pop}</h2>
        <h2>Capital: {props.router.query.cap}</h2>
        <h2>Currency: {props.router.query.curr}</h2>
        <h2>Languages: {props.router.query.lang}</h2>
    </div>
))

const IndividualPage = props => ( //Display the Content within the Layout component.
  <Layout>
    <Content />
    <Link href='/'>
        <img style={button} className="img" src="../arrow.png" alt="Button" />
    </Link>
  </Layout>
)

export default IndividualPage // Import IndividualPage component.
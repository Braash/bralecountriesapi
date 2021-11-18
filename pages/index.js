import Link from 'next/link' //Import Link (This allows us to link our pages to one another)
import Layout from '../Components/Layout' //Import Layout
import Background from './background.js'

const api = 'https://restcountries.com/v3.1/all' // API Stored inside a variable.

const list = { //Styling stored inside a variable
    fontSize: '1.3em',
    fontFamily: 'Arial',
    textDecoration: 'none',
    color: 'black',
    marginBottom: '4px',
    listStyleType: 'none'
}

const anchor = { //Styling stored inside a variable
    textDecoration: 'none'
}


export async function getServerSideProps() { //This function retrieves the data from the API. 
    //export: Return data of the initial loading so that the index page could be rendered on the server to send plain html to the client.
    const res = await fetch(api) //Await the response
    const data = await res.json(); //Store the response and convert it back to JS
    return { //Return props as a object
        props: {data} //Requirement is that JS is sent as plain text once the HTML has been built by the server
    }
}

/*props.country.name.common = Malaysia*/
const CountryLink = (props) => ( //Send props over from Homepage component. // countryinfo? needs to match countryinfo.js the page name.
    <Link as={`/country/${props.id}`} href={`/countryinfo?common=${props.country.name.common}&pop=${props.country.population}&con=${props.country.continents}&curr=${props.curr}&flag=${props.country.flag}&arms=${props.country.coatOfArms.png}&lang=${props.lang}&cap=${props.country.capital}`}>
        <a style={anchor}><li style={list} key={props.id}><b>{props.country.name.common}</b>  {props.country.flag}</li></a> 
    </Link>
)
   

export default function Homepage(props){
    const results = props.data; //Stores the data which has been sent from the getServerSideProps() function.
    //console.log(Object.values(results[0].languages));
    
    //console.log(temp[1]);
    return(
        <div>
            <Background>
                <Layout>
                    <ul>
                        {results.map((item, index) => { // Map through the results and propogate the <ul> with <Countrylink>'s containing the revelant data.
                                //let mainKeys = Object.keys(item);
                                //let mainLang = Object.keys(mainKeys[15])
                                let mainLang = item.languages
                                
                                let newLang = " ";
                                for (const key in mainLang) {
                                    newLang += mainLang[key] + " " 
                                }
                                
                                let mainCurr = item.currencies
                                console.log(item)
                                let newCurr = " ";
                                //console.log(mainCurr)
                                for (const key in mainCurr) {
                                    const currObj = mainCurr[key]
                                    for(const key in currObj){
                                        newCurr += currObj[key] + " "
                                    } 
                                }
                                return(
                                    <CountryLink id={index} country={item} lang={newLang} curr={newCurr}/> 
                                )
                        })
                        }
                    </ul>
                </Layout>
            </Background>
        </div>
    )
}
  
const Background = (props) => (
    <div>
        <div className='body'> 
                {props.children} {/*The children that is in every instance of the Layout component*/}
        </div>
        {/*Global styles which will affect all elements*/}
        <style jsx>
                {`    
                .body{
                    background-color: white;
                    padding: none;
                    margin: none;
                }
        `}</style>
    </div>
)
    
    export default Background; //Export Layout component
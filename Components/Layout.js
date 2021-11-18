const Layout = (props) => (
<div>
    <div className='layoutStyle'> 
            <img className="img" src="../05.png" alt="Company Logo" /> {/*Logo image*/}
            <h2 className='linkStyle'><b>(Rest Countries API Informational Application)</b></h2>
            {props.children} {/*The children that is in every instance of the Layout component*/}
    </div>
    {/*Global styles which will affect all elements*/}
    <style global-jsx>
            {`    
            .layoutStyle{
                margin: 30px;
                padding: 30px;
                border-radius: 1px;
                background-color: rgb(236, 236, 236);
                box-shadow: 0px 0px 7px 5px black;
                },
            body{
                background-color: rgb(236, 236, 236);
            },
            .linkStyle{
                margin: none;
                padding: none;
            }
    `}</style>
    {/*These styles will only affect this component*/}
    <style jsx> 
            {`
            .img{
                height: 70px;
                width: auto;
            },
            .header{
                font-family: Arial; 
                margin:3px;
            }
            `}
    </style>
</div>
)

export default Layout; //Export Layout component
import Product from "./Product";
function Products_list(){
    
    let products=[
        {id:1,name:"Dell laptop",price:"70000",url:"https://p7.hiclipart.com/preview/236/528/1024/laptop-dell-inspiron-15r-5000-series-intel-laptop.jpg"},
        {id:2,name:"Dog food",price:"2000",url:"https://w7.pngwing.com/pngs/741/271/png-transparent-puppy-dog-food-pedigree-petfoods-milk-puppy-food-animals-pet-thumbnail.png"},
        {id:3,name:"Cricket bat",price:"5000",url:"https://w7.pngwing.com/pngs/613/748/png-transparent-cricket-bat-baseball-bat-sport-cricket-bat-angle-sports-equipment-sports.png"},
        {id:4,name:"iphone 15",price:"90000",url:"https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=961,721,x344,y2,safe&width=960"}
    ]

    return (
        <div className="products_list">
            {
            products.map((product)=>{
                return(
                    <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
                )
            }
        
    )
}
</div>
    )}
export default Products_list;
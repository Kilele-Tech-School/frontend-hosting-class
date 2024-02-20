const navigation_links = [
    {
        value: "products.html", 
        label: 'Home'
    },
    {
        value: "products.html", 
        label: 'Academics'
    },
    {
        value: "products.html", 
        label: 'Products'
    },
    {
        value: "products.html", 
        label: 'Registration'
    },
]

function insertLinks(){
    let navigationBarDiv = document.getElementById('navigationBar')

    const createLinks = ()=>{
        for(var linkCount =0; linkCount < navigation_links.length; linkCount++){
            let link = document.createElement('a')
            let textNode = document.createTextNode(navigation_links[linkCount].label)
            link.appendChild(textNode)

            link.href=navigation_links[linkCount].value

            navigationBarDiv.appendChild(link)
        }
    }

    createLinks()

}


/**
 * Arrow functions
 */

// function Washington(){

// }

const Washington = ()=>{
    console.log('my name is washington');
}

Washington()

/**
 * Asynchronous functions
 */


import Home from '../components/Home'
import {connect} from  'react-redux'
import {addToCart} from "../services/actions/action"


const mapStateToProps = ()=>({

})

const mapDispatchToProps= (dispatch) =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home
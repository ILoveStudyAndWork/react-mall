import React from "react";
import './IndexBody.css'
class IndexBody extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    
  }
  
  render() {
    return (
      <div className='.product-container'>
        <div className='product'>
          <img src="http://n1.itc.cn/img8/wb/smccloud/2015/04/17/142923612268757202.JPEG" alt="place-holder"/>
          <p>可乐1</p>
          <p>单价1元/瓶</p>
        </div>
        <div className='product'>
          <img src="http://n1.itc.cn/img8/wb/smccloud/2015/04/17/142923612268757202.JPEG" alt="place-holder"/>
          <p>可乐1</p>
          <p>单价1元/瓶</p>
        </div>
        <div className='product'>
          <img src="http://n1.itc.cn/img8/wb/smccloud/2015/04/17/142923612268757202.JPEG" alt="place-holder"/>
          <p>可乐1</p>
          <p>单价1元/瓶</p>
        </div>
        <div className='product'>
          <img src="http://n1.itc.cn/img8/wb/smccloud/2015/04/17/142923612268757202.JPEG" alt="place-holder"/>
          <p>可乐1</p>
          <p>单价1元/瓶</p>
        </div>
        <div className='product'>
          <img src="http://n1.itc.cn/img8/wb/smccloud/2015/04/17/142923612268757202.JPEG" alt="place-holder"/>
          <p>可乐1</p>
          <p>单价1元/瓶</p>
        </div>

        
      </div>
    );
  }
}

IndexBody.propTypes = {};

export default IndexBody;

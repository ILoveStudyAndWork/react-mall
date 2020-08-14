import React from 'react';
class MallHeader extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    
  }
  
  render() {
    return (
      <div>
        <header className="mall-header">
          <div className='nav-tabs'>
            <h1>商城</h1>
          </div>
          
        </header>
      </div>
    );
  }
}

MallHeader.propTypes = {};

export default MallHeader;

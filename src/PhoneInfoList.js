import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data : [],
        onRemove: ()=> console.warn('onRemove not defined'),
        onUpdate: ()=> console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState){ //상위 컴포넌트의 state가 변하면 하위 컴포넌트도 rerendering 되는데 굳이 rerendering할 필요가 없다면 하지 않게끔
        return nextProps.data !== this.props.data
    }

    render(){
        const {data, onRemove, onUpdate} = this.props;
        const list = data.map(
            info => (
            <PhoneInfo 
                key={info.id}
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />)
        );
        
        return (
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;
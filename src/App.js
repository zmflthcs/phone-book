import React, { Component } from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keyword : ''
  }

handleCreate = (data) => {
  const {information}  = this.state; //해당 방식을 사용하여 state에서 information만 들고 올수 있다.
  this.setState({
    information: information.concat({id: this.id++, ...data}) // ...data를 통해 굳이 concat같은 것을 통해 붙일 필요가 업서진다.
  })
}

handleRemove = (id) => {
  const {information} = this.state;
  this.setState({
    information: information.filter(info => info.id !== id)
  })

}

handleUpdate = (id, data) => {
  const {information} = this.state;
  this.setState({
    information: information.map(
      info => id === info.id?
      {...info, ...data} // 새 객체를 만들어서 기존의 값과 전달받은 data를 덮어쓴다.
      : info // 기존값 유지
    )
  })
}

handleChange = (e) => {
  this.setState({
    keyword: e.target.value,
  });
}

  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info=> info.name.indexOf(keyword)!==-1
    );
    console.log(filteredList);
    return (
      <div>
      <PhoneForm
      onCreate={this.handleCreate}
      />
  
      <p>
       <input
        placeholder = "검색 할 이름을 입력하세요..."
        onChange = {this.handleChange}
        value = {keyword}
        />
      </p>
        <hr/> 

      <PhoneInfoList 
        data={filteredList}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
      />
      </div>
    );
  }
}

export default App;

/*
state를 직접적으로 바꾸는 것이 아니라
기존의 배열에 기반하여 새로운 배열을 만들어내는
함수인 concat, slice, map, filter 같은 함수를 사용해야합니다.
*/
import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

//컴포넌트란 웹에서 화면을 출력하기 위한 어느 단위
 const customers=[{
 'id': 1,
 'image': 'https://placeimg.com/64/64/any',
 'name': '홍길동',
 'birthday' : '1238012',
 'gender' : '남자',
 'job' : '의사'
 },
 { 'id': 2,
 'image': 'https://placeimg.com/64/64/any',
 'name': '쪼빠쪼빠',
 'birthday' : '12312331',
 'gender' : '여자',
 'job' : '둠칫'
 },
 { 'id': 3,
 'image': 'https://placeimg.com/64/64/any',
 'name': '어흫~',
 'birthday' : '1238012',
 'gender' : '중성',
 'job' : '백수'
 }

 ]
//계층적으로 분류해서 입력(분리) (입력데이터가 많을 경우)
class App extends Component{
    render(){
        return(
            <div>
                {
                    //map함수를 이용해 소스코드각 짧다
                    customers.map(c => {
                      return(
                          <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                          />
                      );  
                    })
                }
            </div>
        );
    }
}
export default App;
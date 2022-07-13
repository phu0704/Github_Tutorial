// var fullName ='Do Van Phu'
// var age=22
// alert(fullName)
// alert(age)

// console.log('Day la 1 dong log')
// confirm('Xac nhan ban du tuoi! ')
// prompt(fullName)

// setTimeout(function() {
//     alert('Thong bao')
// }, 3000)

// setInterval(function() {
//     alert('spam')
// }, 5000)
// var a=1
// a=a+2;
// alert(a)
// var User=function(firstName,lastName,avatar){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.avatar=avatar
//     this.getName=function(){
//         return ' ${this.firstName} ${this.lastName}'
//     }
// }
// var author=new User('Phu','Do','Avatar')
// var user=new User('Tuan','Cong','Avatar')
// author.title="Chia se dao"
// console.log(author)
// console.log(user)

// function logger(...params){
//     console.log(params)
// }
// logger(1,2,3,4);
// var a=[1,2,3]
// var b=[4,5,6]
// var c=[...a,...b]
// console.log(c)
// const ulDOM =document.createElement('ul')
// ulDOM.id='ul-id'
// ulDOM.style='color:red;font-size:30px'
// const liDOM1=document.createElement('li')
// liDOM1.innerText='Javascript'
// const liDOM2=document.createElement('li')
// liDOM2.innerText='ReactJS'
// ulDOM.appendChild(liDOM1)
// ulDOM.appendChild(liDOM2)
// document.body.appendChild(ulDOM)
// //React
// const ulReact=React.createElement(
//     'ul',
//     {
//         id:'ul-id',
//         style:'color:red;font-size:30px'
//     },
//     React.createElement('li',null,'Javascript'),
//     React.createElement('li',null,'ReactJS'),

// )
// console.log(ulReact)
// const ul=<ul>
//     <li>Javascript</li>
//     <li>ReactJS</li>
// </ul>
// ReactDOM.render(ul,document.getElementById('root'))
function PostItem(){
    return(
        <div className='post-item'>
            <img 
            src="data:image/jpeg;base64,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"
            alt="conten"/>
            <h2 className="post-title">ABC</h2>
            <p className="post-desc">Ban cos kien thuc ban co tat ca</p>
        </div>
    )
}
function App(){
    return(
        <div id="wrapper">
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))
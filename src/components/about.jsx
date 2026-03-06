import React from 'react'
import {Card ,Row, Col} from 'react-bootstrap';




export default function Abou() {
    return (
      <>

<h2 style={{padding:40}}>  الاشراف العام على الموقع</h2>

<Row xs={1} md={1} className="g-4">

    <Col align='center'>
      <Card className="rounded shadow acd mxh-33">
        <Card.Img variant="top" className="rounded shadow " src="img/dem.jpeg" />
        <Card.Body>
          <Card.Title>   د/ إيمان زكي الشريف </Card.Title>
          <Card.Text>
            <p class="title">استاذ تكنولوجيا التعليم المساعد</p>
            <p class="title">وكيل كليه التربيه النوعيه لشئون التعليم والطلاب</p>
            <p class="title">استاذ مقرر تقنيات التصوير الفوتوغرافي</p>

          </Card.Text>

          <div className='m24'>
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-twitter"></i></a>  
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-facebook"></i></a> 
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-linkedin"></i></a>  

          </div>

        </Card.Body>
      </Card>
    </Col>


    <Col align='center'>
      <Card className="rounded shadow acd mxh-33">
        <Card.Img variant="top" className="rounded shadow " src="img/asm1.jpeg" />
        <Card.Body>
          <Card.Title>   د/ أسماء محمود سيد عبدالرحمن   </Card.Title>
          <Card.Text>
            <p class="title">  مسؤول الجانب التطبيقي للمقرر </p>

          </Card.Text>

          <div className='m24'>
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-twitter"></i></a>  
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-facebook"></i></a> 
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-linkedin"></i></a>  

          </div>

        </Card.Body>
      </Card>
    </Col>




    </Row>
    <p className="p20" style={{padding:30}}>   </p>



    <h2 className="p20" style={{padding:60}}> فريق العمل </h2>


    <Row xs={1} md={2} className="g-4">


    <Col align='center'>

      <Card className="rounded shadow acd mxh-33">
        <Card.Img variant="top" className="rounded shadow" src="img/ali.jpeg" />
        <Card.Body>
          <Card.Title> علي شقراني محمود  </Card.Title>
          <Card.Text>
         طالب بكليه التربيه النوعيه
         <p>
           مسؤول تصميم و تطوير الواجهة الامامية والخلفية  و قواعد البيانات
         </p>
          </Card.Text>

          <div className='m24'>
            <a href="http://twitter.com/AliShakrany" style={{paddingLeft:15}}><i class="fa fa-twitter"></i></a>  
            <a href="http://fb.com/Alishakrany" style={{paddingLeft:15}}><i class="fa fa-facebook"></i></a> 
            <a href="https://www.linkedin.com/in/ali-shakrany-68b874191/" style={{paddingLeft:15}}><i class="fa fa-linkedin"></i></a>  
          </div>

        </Card.Body>
      </Card>
    </Col>


    <Col align='center'>
      <Card className="rounded shadow acd mxh-33">
        <Card.Img variant="top" className="rounded shadow" src="img/abdo.jpeg" />
        <Card.Body>
          <Card.Title>   عبدالرحمن علي خالد</Card.Title>
          <Card.Text>
         طالب بكليه التربيه النوعيه
          
          <p>
            مسئول عن تصميم الواجهة الامامية للموقع
          </p>
          </Card.Text>

          <div className='m24'>
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-twitter"></i></a>  
            <a href="https://www.facebook.com/profile.php?id=100038387500467" style={{paddingLeft:15}}><i class="fa fa-facebook"></i></a> 
            <a href="#" style={{paddingLeft:15}}><i class="fa fa-linkedin"></i></a>  

          </div>

        </Card.Body>
      </Card>
    </Col>
    <p className="p20" style={{padding:30}}>   </p>

    <Col align='center'>
      <Card className="rounded shadow acd mxh-33">
        <Card.Img variant="top" className="rounded shadow" src="img/mah.jpeg" />
        <Card.Body>
          <Card.Title>    محمود احمد ممدوح ابو السعود</Card.Title>
          <Card.Text>
         طالب بكليه التربيه النوعيه
          
          <p>
            مصمم الجرافيك
          </p>

          </Card.Text>

          <div className='m24'>
            <a href="https://mobile.twitter.com/hoksh111" style={{paddingLeft:15}}><i class="fa fa-twitter"></i></a>  
            <a href="https://www.facebook.com/hoksh111" style={{paddingLeft:15}}><i class="fa fa-facebook"></i></a> 
            <a href="https://www.linkedin.com/in/mahmoud-ahmed-mamdouh-501380171" style={{paddingLeft:15}}><i class="fa fa-linkedin"></i></a>  

          </div>

        </Card.Body>
      </Card>
    </Col>


</Row>







  </>
    );
  }
  

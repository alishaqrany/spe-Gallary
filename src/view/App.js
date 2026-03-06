import Header from '../components/Header';
import Footer from '../components/footer';
import Spinner from 'react-bootstrap/Spinner';
import 'mdb-react-ui-kit';
import Video from '../components/video';




function App(props) {
  return (
    (<>
      <Header />
      <div className='container text-center' style={{ paddingTop: 30, PaddingBottom: 50 }}>


        {/*              <div>
            <YoutubePlayer
                src="https://youtu.be/UZCO5k1Nu70" // Reqiured
                width={650}
                height={600}
            />
        </div>

-----------------------------------------
    

   */}
      
        <Video  />
        <p style={{ paddingTop: 30, PaddingBottom: 50 }}></p>

        <div className='d-flex justify-content-center align-items-center 0 ' >
          <div className='text-white1 '>

            <h1 className="bluee sron">
              الخلود.. من بين بساطة اللفظ وعمق الدلالة..  فتهزنا من الأعماق.. لتتولد لغة عالمية أخرى غير الموسيقى.. لغة  في إطار.. الصورة الفوتوغرافية، فالخلود هو أبسط تعبير عن الفن الحقيقي قديما وحاضرا.. سواء في الهدف والغاية.. أو النتيجة المتوقعة لهذا الفن بمعناه الشامل.. "فالفن الحقيقي يمتلك القدرة على قهر الموت".
              وهنا نتحدث عن فن خالد 
               خلود البشرية.. من عصر  الحضارات الانسانية الأولى..الى عصر الصورة الرقمية اليوم.. ولا ندري ماذا يخبيء لنا المستقبل من الأسرار.
               </h1>
            <div align='left' className=''>

            <h4 className='box-b'>
              د إيمان زكي الشريف
            
            </h4>
            <h5>
            وكيل الشئون الطلابية لكلية التربية النوعية
            </h5>
            </div>
          <p>
          </p>
            <a className='btn btn-outline-dark btn-lg' href='gallery' role='button' style={{ PaddingBottom: 50 }}>
              <h4 className='mb-3'>
                عرض الصور

                <Spinner animation="grow" size='sm' />
              </h4>
            </a>
          </div>
        </div>
        <p style={{ paddingTop: 30 }}>  </p>

      </div>
      <Footer />
    </>)

  );
}

export default App;
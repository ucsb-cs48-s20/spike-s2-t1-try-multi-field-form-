import SleepForm from '../components/SleepForm';
import MoodForm from '../components/MoodForm';
import Layout from '../components/MyLayout';


export default function Sleep() {
    return (
      <Layout>
    
    <p>This is the sleep page</p>
    
     <h2> Sleep Form </h2>

        <SleepForm>
        </SleepForm>

      <h2> Mood Form </h2>
        <MoodForm>
        </MoodForm>
       </Layout>
    );
  }
import { Container } from 'react-bootstrap';
import { Timeline, Events, Event } from 'vertical-timeline-component-react';
   
   const TheTimeline = () => {
    const customTheme = {
     yearColor: 'rgb(230 243 254)',
     lineColor: '#d0cdc4',
     dotColor: '#262626',
     borderDotColor: '#d0cdc4',
     titleColor: '#fff',
     subtitleColor: 'rgb(255 236 5 / 89%)',
     textColor: 'rgb(143 143 143)',
    };
   
    return (
        <Container>
        <Timeline theme={customTheme} dateFormat="only-number" collapse withoutDay className="mx-auto">
            <Events
                title="Product Engineer III"
                subtitle="Intercom, Dublin, Ireland"
                startDate='2021/10/18'
                active
                defaultClosed
                children={[
                    <Event title="" description={[]}/>
                ]}
            >
                
            </Events>
            <Events
                title="Senior Software Engineer"
                subtitle="O4S, Gurgaon, India"
                startDate='2018/05/07' 
                endDate="2021/05/06"
                defaultClosed
                children={[
                    <Event title="" description={[]}/>
                ]}
            >
            </Events>
            <Events
                title="Frontend Engineer I"
                subtitle="O4S, Gurgaon, India"
                startDate='2017/05/01' 
                endDate="2018/04/30"
                defaultClosed
                children={[
                    <Event title="" description={[]}/>
                ]}
            >
            </Events>
            <Events
                title="Frontend Engineer"
                subtitle="GlocalGurus, Bangalore, India"
                startDate='2017/08/01' 
                endDate="2018/01/31"
                defaultClosed
                children={[
                    <Event title="" description={[]}/>
                ]}
            >
            </Events>
        </Timeline>
        </Container>
    );
   };

export default TheTimeline
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
   
   const TheTimeline = () => {
    const customTheme = {
     yearColor: 'rgb(230 243 254)',
     lineColor: '#d0cdc4',
     dotColor: '#262626',
     borderDotColor: '#d0cdc4',
     titleColor: '#fff',
     subtitleColor: '#bf9765',
     textColor: 'rgb(143 143 143)',
    };
   
    return (
     <Timeline theme={customTheme} dateFormat='ll'>
      <Container>
       <YearContent startDate='2018/05/07' endDate="2021/05/06"/>
       <BodyContent>
        <Section title='Senior Software Engineer'>
         <Description variant='subtitle' text='O4S, India' />
         <br/>
         <br/>
        </Section>
   
        <Section title='Frontend Engineer-I'>
            <Description variant='subtitle' text='O4S, Gurgaon, India' />
            <br/>
             <br/>
        </Section>
       </BodyContent>
      </Container>
      <Container>
       <YearContent startDate='2017/08/01' endDate="2018/01/31"/>
       <BodyContent>
        <Section title='Frontend Engineer'>
         <Description variant='subtitle' text='GlocalGurus, Bangalore, India' />
         <br/>
         <br/>
        </Section>
   
       </BodyContent>
      </Container>
     </Timeline>
    );
   };

export {TheTimeline}
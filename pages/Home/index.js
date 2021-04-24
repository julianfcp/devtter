import { AppLayout } from "styles/App-css";
import { Header, Footer, Main, Section } from "styles/Home-css";
import { useState, useEffect } from "react";
import Avatar from "components/Avatar";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <Main>
          <Header>Inicio</Header>
          <Section>
            <ul>
              {timeline.length !== 0 &&
                timeline.map((devit) => {
                  return (
                    <li key={devit.id}>
                      <Avatar
                        src={devit.avatar}
                        alt={devit.username}
                        withText
                        text={devit.username}
                      ></Avatar>
                      <p>{devit.message}</p>
                    </li>
                  );
                })}
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              sem tempor, varius quam at, luctus dui. Mauris magna metus,
              dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus
              ac nisl bibendum scelerisque non non purus. Suspendisse varius
              nibh non aliquet sagittis. In tincidunt orci sit amet elementum
              vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam
              porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu,
              tristique eget risus. Integer aliquet quam ut elit suscipit, id
              interdum neque porttitor. Integer faucibus ligula.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
            <p>
              Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi
              suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra
              sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet
              gravida nibh, facilisis gravida odio. Phasellus auctor velit at
              lacus blandit, commodo iaculis justo viverra. Etiam vitae est
              arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam
              tortor, commodo ac dui quis, bibendum viverra erat. Maecenas
              mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur
              et diam tristique, accumsan nunc eu, hendrerit tellus.
            </p>
          </Section>
          <Footer>Footer</Footer>
        </Main>
      </AppLayout>
    </>
  );
}

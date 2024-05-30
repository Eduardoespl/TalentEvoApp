import React from 'react';
import LoginScreen from './src/screens/loginScreen';
import UserScreen from './src/screens/userScreen';
import CoursePlaylistScreen from './src/screens/coursePlaylistScreen';
import LessonScreen from './src/screens/lessonScreen';


function App(): React.JSX.Element {
  return (
    <>
      {/* <UserScreen/> */}
      {/* <LoginScreen/> */}
      {/* <CoursePlaylistScreen/> */}
      <LessonScreen/>
    </>

  );
}

export default App;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Header';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const QuizWord = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const QuizOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const QuizOption = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #071DA1;
  border-radius: 8px;
  color: white;
  border: none;
`;

const NextButton = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 20px;
  background-color: green;
  border-radius: 8px;
  color: white;
  border: none;
`;

const WordQuizPage = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('getWords');
  //       const data = response.data.slice(0, 10); // 최대 10문제까지 설정
  //       setWords(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowNextButton(true);
  };

  const handleNextButtonClick = () => {
    setShowNextButton(false);
    if (currentWordIndex < 9) { // 10문제까지만 퀴즈 진행
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log('퀴즈 종료. 점수:', score);
    }
  };

  const currentWord = words[currentWordIndex];

  return (
    <>
      {/* Header 컴포넌트 */}
      <Header
        isToggled={isToggled}
        userToggled={userToggled}
        setIsToggled={setIsToggled}
        setUserToggled={setUserToggled}
      />

      <QuizContainer>
        {/* 단어 목록이 존재하는 경우 */}
        {words.length > 0 && (
          <>
            {/* 현재 단어 표시 */}
            <QuizWord>{currentWord.word}</QuizWord>
            {/* 선택지 표시 */}
            <QuizOptions>
              {currentWord.options.map((option, index) => (
                <QuizOption
                  key={index}
                  onClick={() => handleOptionClick(option.isCorrect)}
                >
                  {option.meaning}
                </QuizOption>
              ))}
            </QuizOptions>
            {/* 다음 버튼 표시 */}
            {showNextButton && (
              <NextButton onClick={handleNextButtonClick}>다음</NextButton>
            )}
          </>
        )}
      </QuizContainer>
    </>
  );
};

export default WordQuizPage;
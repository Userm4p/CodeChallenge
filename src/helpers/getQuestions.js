export  const  getsQuestions = async () => {

    const url = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    const resp = await fetch(url);
    const {results} = await resp.json();
    const Questions = results.map(q => {
      return {
        category: q.category,
        question: q.question,
        correct_answer : q.correct_answer
      }
    })
    return Questions;
  }
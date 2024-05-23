function generateBtn(){
let para = ["An AI paragraph generator is an AI-writing software that can take minimal text input and create an entire paragraph. With recent advances in natural language processing (NLP) and machine learning, paragraph generators write in a way that is indistinguishable from humans.", "Diwali, also known as the Festival of Lights, is a major holiday celebrated by Hindus, Jains, Sikhs, and some Buddhists across India and in Indian communities around the world. The five-day festival typically takes place in October or November and signifies the victory of light over darkness, good over evil, and knowledge over ignorance.", "Diwali celebrations include lighting oil lamps called diyas, setting off firecrackers, decorating homes with colorful rangoli art patterns, partaking in family feasts, sharing mithai sweets, and praying to Lakshmi, the goddess of wealth and prosperity.", "On the night of Diwali, homes are brightly lit to welcome Lakshmi and people wear their finest clothes and exchange gifts with loved ones.", " For many, Diwali honors the return of Lord Rama and Sita to Ayodhya after their 14-year exile as told in the ancient Hindu epic Ramayana.", "The festival inspires reflection on the inner light that protects people from spiritual darkness. Diwali festivities bring families and communities together to spread light and joy.", "With so many different marketing and sales platforms available to companies, it's no wonder that marketers are turning to artificial intelligence (AI) to help them manage their campaigns. AI can help create more effective campaigns by bringing together all the different aspects of a campaign.", "In a similar way, sales teams are using AI tools to close more deals by using machine learning to understand what makes each lead or account unique, allowing sales reps to go back-and-forth with prospects in ways that will be most effective for them.", "By using AI tools like these, companies can streamline their processes and experience better results.", "A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.", "A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it.", "Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence.", "Most paragraphs in an essay have a three-part structure—introduction, body, and conclusion. You can see this structure in paragraphs whether they are narrating, describing, comparing, contrasting, or analyzing information. Each part of the paragraph plays an important role in communicating your meaning to your reader."];
let paraCount = document.getElementById("paraCount").value;
let count =  Number(paraCount);
let random = Math.floor(Math.random() * para.length);
  
  if(count == "" || count == 0 || isNaN(count) || count < 0){
   document.getElementById("result").innerHTML = para[random]; 
  } else{
    let tempText = para.slice(0, count);
    tempText = tempText.map(function(item){
      return `<div id="result">${item}</div>`
    }).join("");
    console.log(tempText);
    document.getElementById("result").innerHTML = tempText;
  }
}
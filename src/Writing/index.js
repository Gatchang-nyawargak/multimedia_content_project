
import './index.css'

const BlogPost = () => {
  return (
    <div className="blog-post">
      
    <h2 className='headingwriting'>Trevor Noah: "Born a Crime"</h2>
      <div className='intro'>
      <p>
      At the core of "Born a Crime," we find Trevor Noah's soul unfolding,
      a story of transformation unfolded, from a young boy hidden in the shadows to a laughing star of fame.
      Adaptable like water, resilient as the mightiest oak,
      his journey speaks volumes, a symphony of hope.
      Explore how Noah's experiences growing up in apartheid-era South Africa shed light on contemporary challenges that even we face today.
      </p>

      </div>
      <br>
      </br>
      

      <div className='trevor-book'>
        <div>
        <img src = "/images/trevor-book.jpg" width={300} height={400} className='trevor-pic' alt='trevor'></img>
      </div>

      <div className='book-text'>
      <p>
        Noah's memoir not only recounts his personal journey but also serves as a lens through which we can examine broader issues like
        racial segregation, identity, and resilience. The narrative is punctuated by moments of humor and resilience,highlighting Noah and
        his mother's ability to laugh and find joy in the midst of hardship. These moments serve as a reminder of the human capacity for
        creativity and resilience even in the most trying circumstances. 
      </p>
      </div>

      </div>


      <div className='profile'>
        <div className='profile-text'>
          <p>
          Through the lens of adversity, Noah crafts a masterpiece.
          A story elegantly braided with strands of strength.
          From the ashes of hardship, a comedian and host emerges,
          A testament to the power of storytelling, a beacon of inspiration.
          So let us listen, to the tale he tells, Of a world transformed,
          by the power of spells. Through the lens of adversity,
          Noah's masterpiece dwells, a story of strength, woven from
          the threads of cells.
          </p>

        </div>

        <div className='trevor-image'>
        <img src = "images/trevor-pic.png" width={300} height={400} alt=''></img>
        </div>

      </div>

      
      <br>
      </br>

       
       <div className='relevance'>

      <div className='social-issues'>

      <h3 className='social-heading'>Social Issues</h3>
      <div className='social-text'>
      <p>
        One of the key themes of "Born a Crime" is racial identity and the impact of apartheid on society. Noah's narrative prompts us to reflect on ongoing racial tensions and discrimination worldwide.
      </p>
      </div>
      </div>
      
      
      <div className='political-implications'>
      <h3>Political Implications</h3>
      <div>
      <div className='political-text'>
      <p>
        The political landscape Noah describes in South Africa during his childhood offers parallels to current political climates globally. His insights challenge us to consider the complexities of governance, power, and democracy.
      </p>
      </div>
      </div>

      </div>

      <div className='economic-perspectives'>
      <h3>Economic Perspectives</h3>
      <div className='economic-text'>
      <p>
        Noah's upbringing in poverty highlights socioeconomic disparities and the barriers to social mobility faced by many. This perspective invites discussions on economic inequality and access to opportunities.
      </p>
      </div>
      </div>

      </div>

      <br>
      </br>
      <br>
      </br>
      
      <div className='conclusion'>
      <h2 className='conclusion-heading'>Dive Deeper, Stories Await</h2>
      
      <div className='noah-quote-social'>
      <p>"It's such a strange thing, but in two years of hustling I never once thought of it as a crime.
         I honestly didn't think it was bad. It's just stuff people found. White people have insurance. 
         Whatever rationalization was handy. In society, we do horrible things to one another because we
        don't see the person it affects. We don't see their face. We don't see them as people. Which was
        the whole reason the hood was built in the first place, to keep the victims of apartheid out of
        sight and out of mind. Because if white people ever saw black people as human, they would see that
         slavery is unconscionable." </p>
      </div>

      <div className='noah-quote-exposure'>
      <p>"I grew up in a world of violence, but I myself was never violent at all. Yes, I played 
        pranks and set fires and broke windows, but I never attacked people. I never hit anyone.
        I was never angry. I just didn't see myself that way. My mother had exposed me to a different
        world than the one she grew up in. She bought me the books she never got to read. She took me
        to the schools that she never got to go to. I immersed myself in those worlds and I came back
        looking at the world a different way. I saw that not all families are violent. I saw the futility
        of violence, the cycle that just repeats itself, the damage that's inflicted on people that they in
        turn inflict on others. I saw, more than anything, that relationships are not sustained by violence
        but by love." </p>
      </div>

      <div className='noah-quote-me'>
      <p>"My mother used to tell me, 'I chose to have you because I wanted something to love and something
         that would love me unconditionally in return-and then I give birth to the most selfish piece of shit
          on earth and all it ever did was cry and eat and shit and say, 'Me, me, me, me me.'" </p>
      </div>

    
      </div>
    
    <div>
   <button className='read-more'>Read More </button>
    </div>


    </div>
  );
};

  
  export default BlogPost;
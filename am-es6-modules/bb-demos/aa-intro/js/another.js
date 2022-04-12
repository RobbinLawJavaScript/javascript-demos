//global scope
const name = 'robbin'

//Because of the {} we now have
//module scope, no collision.
{
  const name = 'robbin'
}

//If we include type="module" in our <script> tag
//the {} are not needed as they are auto implied.
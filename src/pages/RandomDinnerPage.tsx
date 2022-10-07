


const randomDinnerCollection = [
  'Lasagne', 'Spagetthi Bolognese', 'Taco', 'Fishballs', 'Pancakes',
  'Enchiladas', 'Tomato soup', 'Ceaser salad', 'Beef stew'
]

export function RandomDinnerPage() {

  return (
      <div className="container-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1>Dont know what to make for dinner today?</h1>
                      <p>Let me help you!</p>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <button>Find out</button>
                </div>
              </div>
          </div>
      </div>
  );
}
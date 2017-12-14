const Home = (routes) => {
  // index
  routes.get('/', (req, res) => {
    res.render('index', { title: 'Express Babel' });
  });
}

export default Home;

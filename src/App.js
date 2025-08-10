import React from 'react';

const products = [
  {
    id: 1,
    title: 'قندان مسی طرح انار',
    price: '۱۲۰,۰۰۰ تومان',
    image: 'https://via.placeholder.com/300?text=Product+1'
  },
  {
    id: 2,
    title: 'ظرف آجیل مسی',
    price: '۲۵۰,۰۰۰ تومان',
    image: 'https://via.placeholder.com/300?text=Product+2'
  }
];

function App() {
  return (
    <div style={{ fontFamily: 'Vazir, sans-serif', direction: 'rtl', maxWidth: 900, margin: 'auto', padding: 16 }}>
      <header style={{ background: '#222', color: '#fff', padding: 16, textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>
        دستینه
      </header>
      <main>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16, marginTop: 24 }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden', boxShadow: '0 0 5px #ccc', background: '#fafafa' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
              <div style={{ padding: 12 }}>
                <h3 style={{ margin: '8px 0' }}>{product.title}</h3>
                <p style={{ color: '#c0392b', fontWeight: 'bold' }}>{product.price}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer style={{ background: '#222', color: '#eee', textAlign: 'center', padding: 16, marginTop: 48, fontSize: 14 }}>
        © ۲۰۲۵ دستینه. تمام حقوق محفوظ است.
      </footer>
    </div>
  );
}

export default App;

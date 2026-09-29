# TaskFlow — TODO App

React ve Tailwind CSS kullanılarak geliştirilmiş, LocalStorage ile veri kalıcılığı sağlanan basit bir görev takip uygulaması.

## Özellikler

- Görev ekleme
- Görevleri listeleme
- Görev durumunu güncelleme (tamamlandı / tamamlanmadı)
- Görev silme
- Görevler LocalStorage'da saklanır, sayfa yenilense bile kaybolmaz
- İlerleme çubuğu ile tamamlanan görev oranının takibi

## Kullanılan Teknolojiler

- [React](https://react.dev/) — kullanıcı arayüzü kütüphanesi
- [Vite](https://vite.dev/) — geliştirme ortamı ve build aracı
- [Tailwind CSS](https://tailwindcss.com/) — stil kütüphanesi

## Kurulum

1. Projeyi klonlayın:
```
   git clone https://github.com/OzgurAltinisik/todo-app.git
```
2. Proje klasörüne girin:
```
   cd todo-app
```
3. Bağımlılıkları kurun:
```
   npm install
```
4. Geliştirme sunucusunu başlatın:
```
   npm run dev
```
5. Tarayıcıda `http://localhost:5173` adresine gidin.

## Proje Yapısı

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx    (Görev ekleme formu)
│   │   ├── TodoItem.jsx    (Tek bir görev satırı)
│   │   └── TodoList.jsx    (Görev listesi)
│   ├── App.jsx              (Ana bileşen, state yönetimi)
│   ├── index.css            (Tailwind CSS importu)
│   └── main.jsx
├── index.html
└── package.json
```

## Canlı Demo

[Netlify linki buraya eklenecek]

## Ekran Görüntüsü

[Ekran görüntüsü buraya eklenecek]
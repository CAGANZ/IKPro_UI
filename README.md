# İK Operasyonları Yönetim Uygulaması 
## Frontend Projesi Reposu
![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![React](https://img.shields.io/badge/React-18-blue)
![SQL%20Server](https://img.shields.io/badge/SQL%20Server-DB-red)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06b6d4)

Çoklu şirket (multi-tenant) yapıda **Admin**, **Şirket Yöneticisi** ve **Çalışan** rollerine sahip; taleplerin ve personel süreçlerinin merkezî olarak yönetildiği bir web uygulaması.



---

## İçindekiler
- [Özellikler](#özellikler)
- [Roller](#roller)
- [Mimari](#mimari)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
  
- [Kurulum](#kurulum)
  - [Gereksinimler](#gereksinimler)
  - [Frontend Kurulumu](#frontend-kurulumu)

---

## Özellikler
- **Talep Yönetimi:** Çalışanlar talepler oluşturur, durumlarını takip eder.
- **Çoklu Şirket Desteği:** Birden fazla şirket ve kullanıcı aynı anda yönetilebilir.
- **Rol Bazlı Yetkilendirme:** Admin, Şirket Yöneticisi, Çalışan.
- **Temiz Katmanlar:** Onion Architecture ile net sorumluluk ayrımı.
- **Ölçeklenebilir API:** Bakımı kolay, genişlemeye uygun backend.

## Roller
- **Admin:** Şirketleri, çalışanları ve sistem ayarlarını yönetir.
- **Şirket Yöneticisi:** Kendi şirketindeki çalışanları ve talepleri yönetir.
- **Çalışan:** Kişisel bilgilerini görüntüler; talepler oluşturur ve takip eder.

## Mimari
Onion Architecture’da domain kuralları merkezde tutulur, bağımlılıklar içten dışa akar:

          [Domain]         
             ↑
         [Application]     
             ↑
       [Infrastructure]    
             ↑
     [Presentation / API]  



- **Domain:** Varlıklar, değer nesneleri, arayüzler  
- **Application:** Use case’ler, DTO’lar, servis sözleşmeleri  
- **Infrastructure:** Veri erişimi (EF Core/Repository), dış servis adaptörleri  
- **API (Presentation):** HTTP uçları, doğrulama, kimlik/doğrulama

## Kullanılan Teknolojiler
- **Mimari:** Onion Architecture
- **Backend API:** C# (.NET), ASP.NET Core  
- **Frontend:** React.js, Tailwind CSS
- **Veritabanı:** SQL Server  
- Projenin Backend Reposuna https://github.com/CAGANZ/IKPro_API adresinden ulaşabilirsiniz.
---

## Kurulum

### Gereksinimler
- Node.js (Frontend)
- .NET SDK (Backend)
- SQL Server (Veritabanı)

### Frontend Kurulumu
```bash
git clone https://github.com/CAGANZ/IKPro_UI.git
cd IKPro_UI

# Paketleri yükle
npm install

# Development server'ı başlatma
npm start

# Production build için
npm run build

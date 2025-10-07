# Capítulo IV: Product Design

El *Product Design* será fundamental para nuestro trabajo, ya que nos permitirá crear soluciones centradas en el usuario que aborden de manera efectiva los desafíos identificados en el capítulo de requisitos. Con este enfoque, diseñaremos productos y servicios que sean **intuitivos, atractivos y alineados a las necesidades de nuestros usuarios principales: conductores y dueños/asesores de talleres**.  

Este capítulo guiará el proceso de diseño a través de lineamientos claros de estilo, arquitectura de información, navegación y diseño de interfaces. El objetivo es garantizar que la plataforma **SmartCare** no solo cumpla con su funcionalidad (historial digital de mantenimientos y predictor de servicios y costos), sino que también ofrezca una **experiencia de uso confiable, eficiente y atractiva**.  

De esta manera, se generará valor para nuestros clientes al ofrecerles **trazabilidad de sus vehículos, predicciones confiables y transparencia en la relación con talleres**, contribuyendo a los objetivos comerciales de adopción y escalabilidad de la plataforma.  

---

# 4.1. Style Guidelines

Un *Style Guideline* es un conjunto de reglas y normas que definen cómo se debe redactar, diseñar o presentar documentos, contenido web, software u otros trabajos creativos. A continuación, se detallan las especificaciones de los parámetros implementados en la estructura del proyecto **SmartCare**.

## 4.1.1. General Style Guidelines

### Branding
Para la creación de la identidad visual de **SmartCare**, se ha optado por un diseño **moderno y profesional** que transmita **confianza, transparencia e innovación** en el sector automotriz.  
El logotipo se compone de una **tipografía clara y sólida**, acompañada de un ícono que simboliza la **conexión entre conductor y taller**, así como la **trazabilidad digital de los mantenimientos**.  

**Paleta de colores seleccionada**:  
- **Azul principal**: confianza, seguridad y profesionalismo.  
- **Gris neutro**: equilibrio y soporte visual.  
- **Verde acento**: resalta éxito y predicciones positivas del sistema.  

Esta combinación comunica **credibilidad** hacia los conductores y atractivo comercial hacia los talleres afiliados.

### Tipografía
Se ha elegido una tipografía **Sans Serif** moderna y legible en dispositivos móviles y web.  
- **Títulos y encabezados**: peso **bold**, transmitiendo fuerza y claridad.  
- **Cuerpo de texto**: peso **regular**, con interlineado amplio que favorece la lectura.  

El estilo general busca mantener una comunicación **clara, directa y confiable** para los dos públicos objetivos.

### Iconografía
La iconografía se basa en un estilo **lineal, minimalista y reconocible**, representando conceptos clave como:  
- Vehículos y mantenimientos.  
- Talleres y herramientas.  
- Predicciones y costos.  
- Comunicación y notificaciones.  

Estos íconos facilitan la navegación, reforzando la **intuitividad** de la plataforma.

### Accesibilidad
El diseño de **SmartCare** cumple con criterios de accesibilidad:  
- **Contrastes de color** conformes a estándares **WCAG AA**.  
- **Botones y áreas táctiles** de al menos 44px para interacción cómoda.  
- **Etiquetas alternativas (alt text)** en imágenes e íconos.  
- Jerarquía clara en encabezados y estructura de información. 

## 4.2. Information Architecture

La arquitectura de información de **SmartCare** define cómo se organizará, nombrará y navegará el contenido dentro de la plataforma y su landing page. Este diseño busca garantizar que tanto **conductores** como **dueños/asesores de talleres** encuentren rápidamente la información y funcionalidades que necesitan.  

### 4.2.1. Organization Systems
La organización del sistema se estructura en base a los roles de usuario y las entidades principales del negocio:

- **Conductor**  
  - Mi Garaje (alta y gestión de vehículos).  
  - Historial digital de mantenimientos.  
  - Predictor de servicios y costos.  
  - Talleres cercanos o recomendados.  
  - Gestión de citas (reservar, reprogramar, cancelar).  
  - Perfil personal.  

- **Taller (jefe o asesor)**  
  - Perfil público del taller (datos, fotos, reseñas).  
  - Agenda de citas por día/semana.  
  - Órdenes de Trabajo (check-in, ítems, evidencias, cierre).  
  - Reputación (calificaciones y comentarios de clientes).  

- **Administrador**  
  - Gestión de catálogos (tipos de servicio, pautas de fabricante).  
  - Configuración de la arquitectura técnica (soporte al predictor y consistencia de datos).  

### 4.2.2. Labeling Systems
El sistema de etiquetado utiliza terminología clara y cercana para los usuarios, con énfasis en la acción y el beneficio inmediato. Ejemplos:

- **Conductores**:  
  - "Mi Garaje"  
  - "Historial de Servicios"  
  - "Próximo Servicio Sugerido"  
  - "Ver por qué"  
  - "Rango de Costo Estimado"  
  - "Talleres cerca de mí"  
  - "Reservar / Reprogramar / Cancelar Cita"  

- **Talleres**:  
  - "Agenda Semanal"  
  - "Órdenes de Trabajo"  
  - "Evidencias antes/después"  
  - "Cerrar OT"  
  - "Reputación del Taller"  

- **Landing Page**:  
  - "Cómo funciona"  
  - "Testimonios"  
  - "Beneficios para Talleres"  
  - "Crear mi garaje digital" (CTA conductor)  
  - "Afiliar mi taller" (CTA talleres)  

### 4.2.3. SEO Tags and Meta Tags
Para mejorar el posicionamiento de la landing y la aplicación en motores de búsqueda, se han definido etiquetas SEO y meta tags:

- **Meta title**: SmartCare — Historial digital y predictor de mantenimientos.  
- **Meta description**: Organiza el historial de tu vehículo, recibe predicciones de próximos servicios y costos, y agenda en talleres afiliados con SmartCare.  
- **Open Graph (OG)**:  
  - `og:title`: SmartCare — Tu historial y predictor automotriz digital.  
  - `og:description`: Predice, organiza y confía en tus mantenimientos con SmartCare.  
  - `og:image`: aqui colocar tal imagen (mockup hero LP).  
- **Twitter Card**: versión resumida con título, descripción y visual principal.  
- **JSON-LD (Schema.org)**: marcado para tipo `WebSite` y `Product`, con atributos de marca, beneficios y FAQs.  

### 4.2.4. Searching Systems
La búsqueda dentro de la plataforma se diseña para dar eficiencia en el acceso a la información:

- **Landing Page**:  
  - Búsqueda mínima, orientada a navegación rápida con anclas a secciones ("Cómo funciona", "Testimonios", "Beneficios para talleres").  

- **Web App**:  
  - Buscador de talleres con filtros por cercanía y calificación.  
  - Filtros en historial de mantenimientos (ej. “frenos”, “cambio de aceite”).  
  - Búsqueda por placa de vehículo.  

### 4.2.5. Navigation Systems
La navegación se plantea con menús claros, jerarquías simples y accesos directos a las funciones principales.  

- **Landing Page**:  
  - Inicio  
  - Cómo funciona  
  - Testimonios  
  - Beneficios para talleres  
  - FAQs  
  - CTA destacados: **Crear mi garaje digital** / **Afiliar mi taller**  

- **Aplicación web (Conductor)**:  
  - Mi Garaje  
  - Historial  
  - Predictor  
  - Talleres  
  - Citas  
  - Perfil  

- **Aplicación web (Taller)**:  
  - Agenda  
  - Órdenes de Trabajo  
  - Reputación  
  - Perfil del Taller  

**Patrones de navegación implementados**:  
- Barra de navegación fija en la parte superior.  
- Breadcrumbs en vistas profundas (ejemplo: dentro de una OT).  
- Accesos directos (FAB) para acciones frecuentes como "Añadir lectura de odómetro".  

## 4.3. Landing Page UI Design

El diseño de la **Landing Page** de SmartCare tiene como objetivo principal transmitir la propuesta de valor en menos de 30 segundos y motivar al visitante a registrarse como conductor o afiliar su taller. Para ello, se han creado prototipos visuales que muestran la estructura, distribución y estilo de la página.

### 4.3.1. Landing Page Wireframe

En esta sección se presentan los wireframes de la landing page, donde se define la disposición de los elementos principales y la jerarquía de información.

![Wireframe hero section](../../assets/wireframe-hero-section.webp)
![Wireframe how it works section](../../assets/wireframe-how-it-works-section.webp)
![Wireframe benefits section B2C](../../assets/wireframe-benefits-section-b2c.webp)
![Wireframe benefits section B2B](../../assets/wireframe-benefits-section-b2b.webp)
![Wireframe about us section](../../assets/wireframe-about-us-section.webp)
![Wireframe FAQ and footer section](../../assets/wireframe-FAQ-footer-section.webp)

![Wireframe mobile hero section](../../assets/wireframe-mobile-hero-section.webp)
![Wireframe mobile menu](../../assets/wireframe-mobile-menu.webp)

![Wireframe mobile how it works section](../../assets/wireframe-mobile-how-it-works-section.webp)

![Wireframe mobile benefits section B2C](../../assets/wireframe-mobile-benefits-section-b2c.webp)

![Wireframe mobile benefits section B2B](../../assets/wireframe-mobile-benefits-section-b2b.webp)

![Wireframe mobile about us section](../../assets/wireframe-mobile-about-us-section.webp)

![Wireframe mobile FAQ and footer section](../../assets/wireframe-mobile-FAQ-footer-section.webp)


### 4.3.2. Landing Page Mock-up

Aquí se muestran los mock-ups de alta fidelidad diseñados en Figma, donde se aplican la paleta de colores, tipografía e iconografía definidos en las guías de estilo.

![Mockup hero section](../../assets/mockup-hero-section.webp)
![Mockup how it works section](../../assets/mockup-how-it-works-section.webp)
![Mockup benefits section B2C](../../assets/mockup-benefits-section-b2c.webp)
![Mockup benefits section B2B](../../assets/mockup-benefits-section-b2b.webp)
![Mockup about us section](../../assets/mockup-about-us-section.webp)
![Mockup FAQ and footer section](../../assets/mockup-FAQ-footer-section.webp)

![Mockup mobile hero section](../../assets/mockup-mobile-hero-section.webp)
![Mockup mobile menu](../../assets/mockup-mobile-menu.webp)

![Mockup mobile how it works section](../../assets/mockup-mobile-how-it-works-section.webp)

![Mockup mobile benefits section B2C](../../assets/mockup-mobile-benefits-section-b2c.webp)

![Mockup mobile benefits section B2B](../../assets/mockup-mobile-benefits-section-b2b.webp)

![Mockup mobile about us section](../../assets/mockup-mobile-about-us-section.webp)

![Mockup mobile FAQ and footer section](../../assets/mockup-mobile-FAQ-footer-section.webp)

## 4.6. Domain-Driven Software Architecture

### 4.6.1. Software Architecture Context Diagram

Representa cómo SmartCare se relaciona con los tres tipos de actores y sistemas externos.

![Software Architecture Context Diagram](../../assets/software-architecture-context-diagram.webp)

### 4.6.2. Software Architecture Container Diagram

Define los contenedores de SmartCare:

![Software Architecture Container Diagram](../../assets/software-architecture-container-diagram.webp)

### 4.6.3. SmartCare puede dividirse en dos Bounded Contexts principales:

SmartCare puede dividirse en dos Bounded Contexts principales:

![Bounded Context 1](../../assets/software-architecture-components-diagrams.webp)

![Bounded Context 2](../../assets/software-architecture-components-diagrams-2.webp)

## 4.7. Software Object-Oriented Design

### 4.7.1. Class Diagrams

![Class Diagram](../../assets/class-diagram.webp)


### 4.7.2. Class Directory:
### Class User
| Attribute | Type | Description |
|------------|------|--------------|
| id_user | int | Unique identifier of the user |
| name | String | Full name of the user |
| lastname | String | Last name of the user |
| email | String | Email address used to log in |
| password | String | Hashed password for authentication |
| role | String | Role of the user (DRIVER, WORKSHOP, ADMIN) |

### Class Vehicle
| Attribute | Type | Description |
|------------|------|--------------|
| id_vehicle | int | Unique identifier of the vehicle |
| plate | String | License plate number |
| brand | String | Vehicle brand |
| model | String | Vehicle model |
| year | int | Manufacturing year |
| mileage | int | Current mileage of the vehicle |
| engine_type | String | Engine type of the vehicle |

### Class MaintenanceHistory
| Attribute | Type | Description |
|------------|------|--------------|
| id_history | int | Unique identifier of the maintenance record |
| id_vehicle | int | Vehicle associated with the maintenance |
| id_workshop | int | Workshop where maintenance was done |
| service_type | String | Type of service performed |
| description | String | Description of the service |
| service_date | Date | Date the service was completed |
| cost | Decimal | Total cost of the maintenance |
| mileage_service | int | Vehicle mileage at time of service |

### Class ServicePrediction
| Attribute | Type | Description |
|------------|------|--------------|
| id_prediction | int | Unique identifier of the prediction |
| id_vehicle | int | Vehicle associated with the prediction |
| service_type | String | Type of service predicted |
| estimated_date | Date | Estimated date of service |
| estimated_cost | Decimal | Estimated cost of service |
| probability | Float | Confidence level of the prediction |

### Class WorkshopInfo
| Attribute | Type | Description |
|------------|------|--------------|
| id_workshop | int | Unique identifier of the workshop |
| commercial_name | String | Official name of the workshop |
| description | Text | Description of the services offered |
| location | String | Physical address of the workshop |
| latitude | Decimal | Latitude coordinate |
| longitude | Decimal | Longitude coordinate |
| schedule | String | Opening hours of the workshop |

### Class WorkshopService
| Attribute | Type | Description |
|------------|------|--------------|
| id_service | int | Unique identifier of the service |
| id_workshop | int | Workshop that offers the service |
| id_catalog | int | Reference to catalog service type |
| base_price | Decimal | Base price of the service |
| estimated_duration | int | Estimated duration in minutes |

### Class Reputation
| Attribute | Type | Description |
|------------|------|--------------|
| id_reputation | int | Unique identifier of the review |
| id_workshop | int | Workshop being reviewed |
| id_driver | int | Driver who posted the review |
| rating | int | Numeric rating (1–5) |
| comment | Text | Text feedback provided |
| date | DateTime | Date the review was posted |

### Class Appointment
| Attribute | Type | Description |
|------------|------|--------------|
| id_appointment | int | Unique identifier of the appointment |
| id_driver | int | Driver who scheduled the appointment |
| id_workshop | int | Workshop for the appointment |
| id_vehicle | int | Vehicle for the appointment |
| appointment_date | DateTime | Scheduled date and time |
| status | Enum | Appointment status (Booked, Cancelled, Completed) |

### Class WorkOrder
| Attribute | Type | Description |
|------------|------|--------------|
| id_work_order | int | Unique identifier of the work order |
| id_appointment | int | Appointment associated with the work order |
| start_date | DateTime | Work start date |
| end_date | DateTime | Work end date |
| status | Enum | Work order status (Open, In progress, Closed) |
| notes | Text | Notes from the workshop |

### Class Evidence
| Attribute | Type | Description |
|------------|------|--------------|
| id_evidence | int | Unique identifier of the evidence |
| id_work_order | int | Work order associated with the evidence |
| type | Enum | Evidence type (Before, After) |
| image_url | String | URL of the evidence image |
| description | Text | Additional comments or notes |

### Class AdminCatalog
| Attribute | Type | Description |
|------------|------|--------------|
| id_admin_catalog | int | Unique identifier of the admin catalog |
| name | String | Name of the catalog group |
| description | Text | Description of the catalog purpose |
| created_by | int | User ID of the admin who created it |


## 4.8. Database Design

El siguiente diagrama muestra la estructura relacional de SmartCare, incluyendo las entidades, relaciones y claves foráneas definidas para garantizar la consistencia del dominio del sistema. Las tablas se diseñaron considerando principios de normalización y escalabilidad, permitiendo su implementación en MySQL, PostgreSQL o cualquier motor SQL compatible.

### 4.8.1. Database Diagram

![Database Diagram](../../assets/database-diagram.webp)

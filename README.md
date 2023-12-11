.

---

# Gothic Shoes Store Manager (React Application)

Welcome to the Gothic Shoes Store Manager - an application for managing a shoe store's products using the CRUD methodology.

🔗 **Live Demo:** [https://gothic-shoe-app.netlify.app/](https://gothic-shoe-app.netlify.app/)

🔗 **Repository:** [https://github.com/Litalhag/Goth-Shoes-app](https://github.com/Litalhag/Goth-Shoes-app)

## Screenshots:

![Screenshot 1](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/dbea8ec5-2502-4536-90fc-a5eda5f0604a)

![Screenshot 2](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/d5b1e50b-4936-4f40-9184-8be7ee1dc667)

![Screenshot 3](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/1fed9cda-1a02-44fc-a210-407085e5a88e)

![Screenshot 4](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/11297339-4108-4a17-83ed-56919ea7a20a)

![Screenshot 5](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/23ef5b48-83cb-411c-b9f2-360099dc0020)

![Screenshot 6](https://github.com/Litalhag/Goth-Shoes-app/assets/130139673/be41fb8a-8e95-4b82-b180-81267a082555)

## Features:

### **1. Read (Fetch Products)**

- Display a list of shoes.
- Each shoe displays a picture, name, and price.

### **2. Create (Add a New Product)**

- Admin can add new shoes to the list.
- Name validation: Must be at least 5 characters long.
- Image validation: The URL must end with extensions like ".jpg", ".png", etc.
- Fields are validated before sending an ajax request.
- Submit button is disabled during an active request.

### **3. Update (Edit an Existing Product)**

- Admin can edit existing shoe details.
- All shoe details are editable.

### **4. Delete (Remove a Product)**

- Admin can delete a product from the list.

### **5. Loading State**

- Displays a spinner during ajax requests.

### **6. User Authentication**

- Features a login system.
- Only admin users can add, edit, or delete products.

### **7. Routing**

- Home page: `localhost:5173/`
- Shoes list page: `localhost:5173/shoes`
- Shoe detail/edit page: `localhost:5173/shoes/{shoeId}`
- Add shoe page: `localhost:5173/shoes/add`
- "Page Not Found" for invalid routes.
- Additional custom routes as per requirements.

## Technology Stack:

- React (with Hooks and Context API)
- Axios for HTTP requests
- Mock API for database simulation
- Custom CSS (Design & Styling)

## Miscellaneous:

- Uses React Router for navigation, with shared layout for the navbar and footer.
- Uses custom `useForm` hook for both editing and adding products.
- Protected routes are in place for admin-only pages.

## Bugs and Fixes:

- Fixed a bug that allowed users to submit a shoe multiple times.
- Fixed a bug where shoes could be added without a name or valid image URL.

## Credits:

- Design & Idea: This project features a unique gothic shoes theme.

---

.

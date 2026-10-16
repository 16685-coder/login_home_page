        const passwordInput = document.querySelector("#password");
		const passwordToggle = document.querySelector("#password-toggle");
		const formMessage = document.querySelector("#form-message");

		passwordToggle.addEventListener("click", () => {
			const isVisible = passwordInput.type === "text";
			passwordInput.type = isVisible ? "password" : "text";
			passwordToggle.setAttribute("aria-pressed", String(!isVisible));
			passwordToggle.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
		});

		document.querySelector("#login-form").addEventListener("submit", (event) => {
			event.preventDefault();
			formMessage.textContent = "Sign-in is ready to connect to your authentication service.";
		});

		document.querySelector("#reset-link").addEventListener("click", () => {
			formMessage.textContent = "Password reset is ready to connect to your account service.";
		});

		document.querySelector("#create-link").addEventListener("click", () => {
			formMessage.textContent = "Account creation is ready to connect to your signup flow.";
		});
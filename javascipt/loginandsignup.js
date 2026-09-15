// Simple client-side signup & login with password verification using localStorage.
// Note: For production, always use a secure backend and proper password hashing.

// Utility: simple (not secure) hash for demo purposes
function simpleHash(str) {
	let h = 2166136261;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
	}
	return (h >>> 0).toString(16);
}

// Password strength check
function passwordStrength(pw) {
	const lengthScore = Math.min(6, pw.length) / 6;
	const upper = /[A-Z]/.test(pw);
	const lower = /[a-z]/.test(pw);
	const digit = /[0-9]/.test(pw);
	const special = /[^A-Za-z0-9]/.test(pw);
	const variety = [upper, lower, digit, special].filter(Boolean).length / 4;
	const score = Math.round((lengthScore * 0.6 + variety * 0.4) * 100);
	return { score, upper, lower, digit, special };
}

// Signup: validate and store user in localStorage
function signup(email, password, confirmPassword) {
	if (!email || !password || !confirmPassword) return { ok: false, msg: 'All fields required' };
	if (password !== confirmPassword) return { ok: false, msg: 'Passwords do not match' };
	const ps = passwordStrength(password);
	if (ps.score < 50) return { ok: false, msg: 'Password too weak' };
	const key = 'bc_users';
	const raw = localStorage.getItem(key);
	const users = raw ? JSON.parse(raw) : {};
	if (users[email]) return { ok: false, msg: 'User already exists' };
	users[email] = { hash: simpleHash(password), created: Date.now() };
	localStorage.setItem(key, JSON.stringify(users));
	return { ok: true, msg: 'Signup successful' };
}

// Login: verify email and password
function login(email, password) {
	if (!email || !password) return { ok: false, msg: 'All fields required' };
	const key = 'bc_users';
	const raw = localStorage.getItem(key);
	if (!raw) return { ok: false, msg: 'No users registered' };
	const users = JSON.parse(raw);
	const user = users[email];
	if (!user) return { ok: false, msg: 'User not found' };
	if (user.hash !== simpleHash(password)) return { ok: false, msg: 'Invalid password' };
	// store session (simple)
	localStorage.setItem('bc_session', JSON.stringify({ email, started: Date.now() }));
	return { ok: true, msg: 'Login successful' };
}

// Optional: wire to forms if present in the page
document.addEventListener('DOMContentLoaded', () => {
	const sf = document.getElementById('signupForm');
	const lf = document.getElementById('loginForm');
	if (sf) {
		sf.addEventListener('submit', e => {
			e.preventDefault();
			const email = sf.querySelector('[name="email"]').value.trim();
			const pw = sf.querySelector('[name="password"]').value;
			const cpw = sf.querySelector('[name="confirmPassword"]').value;
			const res = signup(email, pw, cpw);
			alert(res.msg);
			if (res.ok) sf.reset();
		});
	}
	if (lf) {
		lf.addEventListener('submit', e => {
			e.preventDefault();
			const email = lf.querySelector('[name="email"]').value.trim();
			const pw = lf.querySelector('[name="password"]').value;
			const res = login(email, pw);
			alert(res.msg);
			if (res.ok) lf.reset();
		});
	}
});

// Expose API
window.BCAuth = { signup, login, passwordStrength };
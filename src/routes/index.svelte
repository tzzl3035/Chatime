<style>
	h1, h2, h5 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: rgb(200, 20, 70);
	}

	h2 {
		font-size: 1.5em;
		color: indianred;
	}

	h3 {
		font-size: 1.4em;
		color: lightcoral;
		margin-top: 3em;
	}

	p {
		text-align: center;
	}

	h5 {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 2em;
	}

	span {
		display: block;
		text-align: left;
		white-space: pre-wrap;
		height: 100%;
		width: 100%;
	}

	strong {
		font-size: 1.3em;
		text-align: center;
	}

	
	.bigger {
		max-width: 56em;
		margin: 0 auto;
	}


	.infop {
		text-align: left;
		margin-left: 4em;
	}

	.cd {
		width: 100%;
		height: 15em;
		overflow: auto;
		white-space: pre-wrap;
	}

	#loginBtn, #logupBtn {
		width: 20em;
		background-color: lightblue;
		border: none;
		border-radius: 5px;
		display: block;
	}

	#loginBtn {
		margin: 7em auto 2em auto;
	}

	#logupBtn {
		margin: 0 auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
		#loginBtn, #logupBtn {
			width: 50em;
		}
		.infop {
			text-align: left;
			margin-left: 10em;
		}
		.cd {
			height: 20em;
		}
	}
</style>

<svelte:head>
	<title>畅聊时刻</title>
</svelte:head>

<div class="bigger">

<h1>你好!</h1>
<h2><strong>欢迎来到 <code>畅聊时刻</code>!</strong></h2>

<h3>我们是谁:</h3>

<p class="infop">(The lazy author lefts nothing...)</p>

<a href="/login"><button id="loginBtn" class="btn">登录</button></a>
<a href="/logup"><button id="logupBtn" class="btn">注册</button></a>

<h5 class="text-info">有好的建议?请联系<code>tzzl3035@163.com</code></h5>

</div>

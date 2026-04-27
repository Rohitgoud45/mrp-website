// Initialize Mermaid
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Chart.js Configuration
    const ctx = document.getElementById('kpiChart').getContext('2d');

    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Wrongful Citations (%)', 'Permit Latency (Hrs)', 'Dispute Res. Time (Hrs)', 'Active Disputes'],
        datasets: [
          {
            label: 'Current (Legacy)',
            data: [45.5, 168.2, 231.3, 47],
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Target (CIPS)',
            data: [5.25, 8.61, 115.31, 4],
            backgroundColor: 'rgba(0, 212, 255, 0.5)',
            borderColor: '#00d4ff',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            beginAtZero: true
          },
          x: {
            grid: { display: false }
          }
        },
        plugins: {
          legend: { position: 'top' }
        }
      }
    });
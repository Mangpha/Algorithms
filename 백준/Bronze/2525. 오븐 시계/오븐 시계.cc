#include <iostream>

using namespace std;

int main()
{
  int h, m, p;

  cin >> h >> m;
  cin >> p;

  m += p;
  if (m >= 60)
  {
    h += m / 60;
    m = m % 60;
    if (h >= 24)
      h -= 24;
  }

  cout << h << " " << m << endl;
  return 0;
}
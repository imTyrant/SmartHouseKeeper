package dao;

import java.util.List;

/**
 * SHKDOA
 */
public interface ISHKDOA<T> {

    public boolean add(T raw);

    public boolean update(T raw, Object... keys);

    public T get(Object... keys);

    public boolean find(Object... keys);

    public boolean delet(Object... keys);

    public List<T> getAll();
}
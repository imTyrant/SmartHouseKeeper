package dao;

import java.util.List;

import model.MSetting;
import util.DOAInitExecption;

/**
 * SettingDOA
 */
public class SettingDOA extends SHKDOA<MSetting> {

    public SettingDOA() throws DOAInitExecption {
        super();
        this.table = "house_setup";
    }

    @Override
    public boolean add(MSetting raw) {
        return false;
    }

    @Override
    public List<MSetting> getAll() {
        return null;
    }

    @Override
    public boolean update(MSetting raw, Object... keys) {
        return false;
    }

    @Override
    public boolean delet(Object... keys) {
        return false;
    }

	@Override
	public MSetting get(Object... keys) {
		return null;
	}
}